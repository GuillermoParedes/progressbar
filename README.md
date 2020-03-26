# ProgressBar Component

Este componente fue desarrollado bajo los siguientes requerimientos:

- NodeJS >= 8.10.0
- Angular 7


## Uso

Para utilizar el component, necesitamos importarlo en el Modulo que lo necesitemos, de la siguiente manera.

```ts
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule
  ]
```

Ahora solo necesitamos llamar a nuestro componente en nuestras templetas `HTML`

```html
 <app-progressbar
    [value]="value"
    [total]="100"
    [color]="'#16a085'"
    [configStyle]="{'height': '40px', 'padding': '20px'}"
    (changed)="changedProgressbar($event)"
    (completed)="completedProgressbar($event)"
  ></app-progressbar>
```

## Parametros de Entrada

Tenemos los siguientes parametros:
- value: El valor con el que se marcara la barra de progreso.
- total: El total de la barra de progreso.
- color: El color de la barra de progreso.
- configStyle: Este es un objeto que puede contener todo lo que queramos modificar del componente en cuestion de estilos.


## Parametros de Salida

Tenemos los siguientes parametros:
- changed: Evento que se dispara cuando ocurre un cambio dentro del componente.
- completed: Evento que se dispara cuando llega al total del componente.




### Author
Guillermo David Paredes Torrez

@FondationTutator

@Codevs
