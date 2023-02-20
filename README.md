This is a demo project creating base on recruitment task placed below.

> Zadanie rekrutacyjne – Win Local 12.2022
>
>Zadanie polega na napisaniu aplikacji wyświetlającej posty użytkowników ( z możliwością usuwania/dodawania
> nowych postów dla konkretnego użytkownika ) i wyświetlania komentarzy do danego posta. Proszę użyć Gitlab
> lub Github dla publikacji gotowego rozwiązania.
> Techniczna strona zadania:
>- template: Next.js
>- state: Context API
>- language: TypeScript
>- routing: next.js default routing
>- styles: MATERIAL-UI
>- API: https://jsonplaceholder.typicode.com/
>
>JSONPlaceholder - Free Fake REST API
> When to use. JSONPlaceholder is a free online REST API that you can use
> whenever you need some fake data.It can be in a README on GitHub, for
> a demo on CodeSandbox, in code examples on Stack Overflow, ...or
> simply to test things locally.
> jsonplaceholder.typicode.com
>
>1. Route: '/': Strona główna powinna wyświetlać 8 użytkowników z ich detalami (
    > można pominąć adres zamieszkania ) w postaci klasycznych kostek.
    > Wymagania:
>- Po kliknięciu kostki z użytkownikiem aplikacja powinna przenieść nas do
   > podstrony z detalami danego użytkownika.
>2. Route '/user/:id': Strona detali użytkownika.
    > Wymagania:
>- na górze na środku imię i nazwisko danego użytkownika.
>- po lewej stronie strzałka powrotu na główną stronę.
>- po prawej przycisk dodania nowego postu dla danego użytkownika. Po kliknięciu
   > tego przycisku pojawia się modal z inputem do wpisania tytułu i textarea do
   > wpisania treści postu. Pod formularzem przyciski: cancel i add. Cancel zamyka modal
   > z formularzem, add wysyła posta do API. Odpowiednia mutacja w storze.
>- poniżej na środku lista postów. Każdy element listy zawiera po lewej przycisk z
   > możliwością usunięcia postu. Po naciśnięciu pojawia się modal z potwierdzeniem.
   > (cancel i remove - remove wysyła delete do api). Na środku każdego elementu listy
   > wyświetlony jest tytuł posta skrócony do jednej linii i przytrymowany ( maks 50
   > znaków ). Odpowiednia mutacja w storze.
>- kliknięcie elementu listy prowadzi do detali posta.
> 3. Route: '/user/:id/:post_id': strona detali postu
     > Wymagania:
     > Na górze na środku imię i nazwisko użytkownika. Po lewej przycisk back który wraca
     > do listy postów.
     > Poniżej wycentrowany post wyświetlony w całości. U góry pogrubiony tytuł, poniżej
     > cała treść posta.
     > Pod postem przycisk "show comments" który wyświetla listę z komentarzami ( po lewej
     > imię po prawej email, poniżej treść komentarza ).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Possible improvements

- Add error handling
- Use deep extend to merge client and server side store during stores sync
- Add more tests
- Improve UI, it's not perfect now xD