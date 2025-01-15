declare module 'react-leaflet' {
    import * as React from 'react';
    import * as L from 'leaflet';
  
    export class Map extends React.Component<any, any> {}
    export class TileLayer extends React.Component<any, any> {}
    export class Marker extends React.Component<any, any> {}
    export class Popup extends React.Component<any, any> {}
}