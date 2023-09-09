# Country List App

This is a simple React web application that displays a list of countries using GraphQL to fetch data from the "https://countries.trevorblades.com/graphql" API. The application allows users to filter and select countries from the list.

## Features

- Display a list of countries with details such as name, native name, capital, emoji, and currency.
- Filter countries by name.
- Click on a country to view additional information.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Apollo Client: A GraphQL client for managing application data.
- Tailwind CSS: A utility-first CSS framework for styling.

## Code Structure

- `src/App.js`: The main application component that sets up Apollo Client and renders the `CountryList` component.
- `src/Components/CountryList.js`: The component responsible for fetching and displaying the list of countries.

## Dependencies

- `@apollo/client`: The Apollo Client library for GraphQL.
- `tw-elements-react`: A library for UI elements with Tailwind CSS styling.

---

# Ülke Listesi Uygulaması

Bu, GraphQL kullanarak "https://countries.trevorblades.com/graphql" API'sinden veri çekerek ülkelerin bir listesini gösteren basit bir React web uygulamasıdır. Uygulama, kullanıcıların listeden ülkeleri filtrelemesine ve seçmesine olanak tanır.

## Özellikler

- Ad, yerel ad, başkent, emoji ve para birimi gibi detaylarla ülkelerin listesini gösterme.
- Ülkeleri ada göre filtreleme.
- Bir ülkeye tıklamak için ülke kartına tıklayın ve daha fazla bilgi görüntüleyin.

## Kullanılan Teknolojiler

- React: Kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesi.
- Apollo Client: Uygulama verilerini yönetmek için kullanılan bir GraphQL istemcisi.
- Tailwind CSS: Stil vermek için kullanılan bir CSS çerçevesi.

## Kod Yapısı

- `src/App.js`: Apollo Client'ı yapılandıran ve `CountryList` bileşenini renderlayan ana uygulama bileşeni.
- `src/Components/CountryList.js`: Ülkelerin listesini çeken ve gösteren bileşen.

## Bağımlılıklar

- `@apollo/client`: GraphQL için Apollo Client kütüphanesi.
- `tw-elements-react`: Tailwind CSS stili ile UI elementleri sağlayan bir kütüphane.