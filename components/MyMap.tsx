"use client";

import React, { useCallback, useState } from "react";
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

const map_data_repeated: any[] = [];

map_data_numeric.forEach((obj) => {
  const count = obj.properties.count;

  for (let i = 0; i < count; i++) {
    const clonedObj = { ...obj };
    map_data_repeated.push(clonedObj);
  }
});

const geojson: FeatureCollection = {
  type: "FeatureCollection",
  features: map_data_repeated as any,
};

import "mapbox-gl/dist/mapbox-gl.css";
import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from "./layers";

const MyMap = () => {
  return (
    <div className="w-full h-full p-20 items-center">
      {" "}
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYmVud2FycmVuNTAyMCIsImEiOiJjbHB6a3UwZnIxNnJkMnJvOGdsZGs5NHhuIn0.3qwtXDd3nNi7oZciqao-ZA"
        initialViewState={{
          longitude: 18.6549128205992,
          latitude: -34.02451176651568,
          zoom: 8,
        }}
        style={{ width: 900, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source
          id="my-data"
          type="geojson"
          data={geojson}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
    </div>
  );
};

export default MyMap;
