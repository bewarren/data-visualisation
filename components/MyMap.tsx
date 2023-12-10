"use client";

import React from "react";
import Map, { Source, Layer } from "react-map-gl";
import type { CircleLayer } from "react-map-gl";
import type { FeatureCollection } from "geojson";
import { map_data } from "./map_data";

const map_data_numeric = map_data.map((feature) => ({
  ...feature,
  geometry: {
    ...feature.geometry,
    coordinates: feature.geometry.coordinates.map((coord) => parseFloat(coord)),
  },
}));

const geojson: FeatureCollection = {
  type: "FeatureCollection",
  features: map_data_numeric as any,
};

const layerStyle: CircleLayer = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};
import "mapbox-gl/dist/mapbox-gl.css";

const MyMap = () => {
  return (
    <div className="w-full h-full p-10 items-center">
      {" "}
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYmVud2FycmVuNTAyMCIsImEiOiJjbHB6a3UwZnIxNnJkMnJvOGdsZGs5NHhuIn0.3qwtXDd3nNi7oZciqao-ZA"
        initialViewState={{
          longitude: 18.6549128205992,
          latitude: -34.02451176651568,
          zoom: 8,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
};

export default MyMap;
