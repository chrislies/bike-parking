# Bike Parking

[Bike Parking](https://bike-parking.vercel.app/) is a community-driven interactive web map that locates accessible parking spots (bike racks and street signs) for bikes and scooters. Accessible parking spots are pinned on the map along with any community reports they may have received from users within the app.

## Mission

Bike Parking's mission is to make the bike/scooter commuting experience more convenient by reducing the hassle of trying to find a good spot to lock your vehicle.

## Features

- Save a spot
- Report a spot
- View reports for a spot
- Navigation and routing to a spot
- Request to add a new spot
- Request to delete a spot

## Featured Technologies

- Interactive map using [Leaflet](https://leafletjs.com/), [React-Leaflet](https://react-leaflet.js.org/)
- Real-time data from [NYC Open Data](https://opendata.cityofnewyork.us/)
- [Next.js](https://nextjs.org/) frontend framework
- [Supabase](https://supabase.com/) backend ORM
- Deployed and hosted on [Vercel](https://vercel.com/)

## Development

1. Install [Node.js 18.17](https://nodejs.org/en/download/) or later
2. Clone repository and download dependencies

```
git clone https://github.com/chrislies/Bike-Parking.git && cd Bike-Parking/bike-parking-app/ && npm install
```

3. Create a [Supabase](https://supabase.com/) project and obtain API keys
4. Create a `.env` file in the `bike-parking-app` directory and paste your `‘NEXT_PUBLIC_SUPABASE_URL’` and `‘NEXT_PUBLIC_SUPABASE_ANON_KEY’` keys
5. Start local development server

```
npm run dev
```
## Dependencies
- `@headlessui/react`: `^1.7.18`
- `@hookform/resolvers`: `^3.3.4`
- `@react-leaflet/core`: `^2.1.0`
- `@supabase/ssr`: `latest`
- `@supabase/supabase-js`: `latest`
- `@types/leaflet.featuregroup.subgroup`: `^1.0.3`
- `@types/leaflet.markercluster`: `^1.5.4`
- `@types/react-leaflet-pixi-overlay`: `^3.0.3`
- `@types/supercluster`: `^7.1.3`
- `axios`: `^1.6.8`
- `cookies-next`: `^4.1.1`
- `leaflet`: `^1.9.4`
- `leaflet-control-geocoder`: `^2.4.0`
- `leaflet-defaulticon-compatibility`: `^0.1.2`
- `leaflet-rotate`: `^0.2.8`
- `leaflet-routing-machine`: `^3.2.12`
- `leaflet.featuregroup.subgroup`: `^1.0.2`
- `leaflet.markercluster`: `^1.5.3`
- `next`: `latest`
- `next-auth`: `^4.24.7`
- `npm`: `^10.5.0`
- `query-string`: `^9.0.0`
- `react`: `^18`
- `react-dom`: `^18`
- `react-hook-form`: `^7.51.2`
- `react-hot-toast`: `^2.4.1`
- `react-icons`: `^5.0.1`
- `react-leaflet`: `^4.2.1`
- `react-leaflet-cluster`: `^2.1.0`
- `react-leaflet-pixi-overlay`: `^3.0.2`
- `supercluster`: `^8.0.1`
- `swr`: `^2.2.5`
- `zod`: `^3.22.4`

## DevDependencies
- `@svgr/webpack`: `^8.1.0`
- `@types/leaflet`: `^1.9.8`
- `@types/leaflet-rotate`: `^0.1.4`
- `@types/node`: `^20`
- `@types/react`: `^18`
- `@types/react-dom`: `^18`
- `@types/react-leaflet`: `^3.0.0`
- `autoprefixer`: `^10.0.1`
- `eslint`: `^8`
- `eslint-config-next`: `14.1.0`
- `postcss`: `^8`
- `tailwindcss`: `^3.3.0`
- `typescript`: `^5`
