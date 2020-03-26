// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar

import {Injectable} from '@angular/core';

import {isPresent} from './progressbar.utils';
import { Subject, Observable } from 'rxjs';


export enum ProgressBarServiceType {
    PROGRESS,
    HEIGHT,
    COLOR,
    VISIBLE
}

export class ProgressBarServiceEvent {
    constructor(public type:ProgressBarServiceType, public value:any) {}
}

/**
 * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component
 */
@Injectable()
export class ProgressBarService {

    private _progress:number = 0;
    private _height:string = '2px';
    private _color:string = 'firebrick';
    private _visible:boolean = true;

    private _intervalCounterId:any = 0;
    public interval:number = 500; // in milliseconds

    private eventSource: Subject<ProgressBarServiceEvent> = new Subject<ProgressBarServiceEvent>();
    public events: Observable<ProgressBarServiceEvent> = this.eventSource.asObservable();

    constructor() {}

    set progress(value:number) {
        if (isPresent(value)) {
            if (value > 0) {
                this.visible = true;
            }
            this._progress = value;
            this.emitEvent(new ProgressBarServiceEvent(ProgressBarServiceType.PROGRESS, this._progress));
        }
    }

    get progress():number {
        return this._progress;
    }


    set height(value:string) {
        if (isPresent(value)) {
            this._height = value;
            this.emitEvent(new ProgressBarServiceEvent(ProgressBarServiceType.HEIGHT, this._height));
        }
    }

    get height():string {
        return this._height;
    }

    set color(value:string) {
        if (isPresent(value)) {
            this._color = value;
            this.emitEvent(new ProgressBarServiceEvent(ProgressBarServiceType.COLOR, this._color));
        }
    }

    get color():string {
        return this._color;
    }

    set visible(value: boolean) {
        if (isPresent(value)) {
            this._visible = value;
            this.emitEvent(new ProgressBarServiceEvent(ProgressBarServiceType.VISIBLE, this._visible));
        }
    }

    get visible():boolean {
        return this._visible;
    }

    private emitEvent(event: ProgressBarServiceEvent) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }


    start(onCompleted:Function = null) {
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds iterval
        this._intervalCounterId = setInterval(() => {
            // Increment the progress and update view component
            this.progress++;
            // If the progress is 100% - call complete
            if (this.progress === 100) {
                this.complete(onCompleted);
            }
        }, this.interval);
    }

    stop() {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    }

    reset() {
        this.stop();
        this.progress = 0;
    }

    complete(onCompleted: Function = null) {
        this.progress = 100;
        this.stop();
        setTimeout(() => {
            // Hide it away
            this.visible = false;
            setTimeout(() => {
                // Drop to 0
                this.progress = 0;
                if (onCompleted) {
                    onCompleted();
                }
            }, 250);
        }, 250);
    }


}
