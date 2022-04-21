import { world_map } from "./map-data/world_map";
import { uncountries } from "./map-data/data";
import * as React from "react";
import ReactDOM from "react-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import reportWebVitals from "./reportWebVitals";

import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  MarkersDirective,
  MarkerDirective,
  Marker,
  Inject,
  MapsTooltip,
} from "@syncfusion/ej2-react-maps";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFhWH5acXJVQmFUUEA="
);

ReactDOM.render(
  <MapsComponent id="maps">
    <Inject services={[MapsTooltip]} />
    {/* <Inject services={[Marker]} /> */}
    <LayersDirective>
      {/* <LayerDirective shapeData={world_map}>
        <MarkersDirective>
          <MarkerDirective
            visible={true}
            height={20}
            width={20}
            animationDuration={0}
            dataSource={[
              { latitude: 49.95121990866204, longitude: 18.468749999999998 },
              { latitude: 59.88893689676585, longitude: -109.3359375 },
              { latitude: -6.64607562172573, longitude: -55.54687499999999 },
            ]}
          ></MarkerDirective>
        </MarkersDirective>
      </LayerDirective> */}
      <LayerDirective
        shapeData={world_map}
        tooltipSettings={{
          visible: true,
          valuePath: "name",
        }}
      ></LayerDirective>
    </LayersDirective>
  </MapsComponent>,
  document.getElementById("maps")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
