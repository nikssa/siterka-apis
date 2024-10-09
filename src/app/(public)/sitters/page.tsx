import UserCard from '@/components/common/UserCard/UserCard';
import {
  EarningsRate,
  Education,
  Languages,
  PostDataProps
} from '@/types/types';

const SittersPage = async function () {
  const usersData = await fetch('http://localhost:4000/api/sitters', {
    method: 'GET'
  });
  const users = await usersData.json();

  const posts: PostDataProps[] = [
    {
      id: 1,
      title: 'Sitter Nanny',
      description: 'Sitter Nanny Description',
      email: 'pGK3B@example.com',
      phone: '555-555-5555',
      birthDate: new Date('1990-01-01'),
      country: 'USA',
      city: 'New York',
      address: '123 Main St',
      languages: [Languages.ENGLISH, Languages.FRENCH],
      earnings: 500,
      earningsRate: EarningsRate.HOURLY,
      experience: 5,
      availability: 'Monday - Friday',
      education: Education.HIGH_SCHOOL,
      sitterCourse: true,
      firstAid: true,
      author: {
        id: 1,
        name: 'John Doe',
        email: 'pGK3B@example.com',
        role: 'sitter',
        active: true
      },
      authorId: 1,
      profile: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        gender: 'male',
        bio: 'I am a sitter',
        photo: {
          id: 1,
          url: 'https://picsum.photos/200'
        }
      },
      profileId: 1
    }
  ];

  return (
    <>
      <section>
        <div className='inner'>
          <h1>Looking for a sitter</h1>
          {posts.map((post) => (
            <UserCard key={post.id} data={post} />
          ))}

          <div className='user-horizontal-card'></div>
          <ol>
            <li>
              <figure>
                <a href='/siterke/30218/dadilja-babica-nanny'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/1997.jpg?1727191441'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Dadilja- babica-nanny B.'
                  />
                </a>
                <i className='score-5'></i>
                <span>1 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/30218/dadilja-babica-nanny'>
                    Dadilja- babica-nanny B.
                  </a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>47 godina</span>
                  <span>28 godina iskustva</span>
                </address>
                <p>
                  Potrebno Vam je stručno kvalifikovano lice za rad,iskljucivo
                  sa PREVREMENO RODJENIM BEBAMA,NOVORODJENČADIMA I STARIJOM
                  ODOJČADI,(DADILJA,BABICA),sa dugogodis...
                </p>
                <time dateTime='2024-09-25 10:54:09'>
                  pre 7 minuta<span>odgovara u 7+ dana</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/30218/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/22736/nevena'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/7274.jpg?1722367170'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Nevena P.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/22736/nevena'>Nevena P.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>23 godina</span>
                  <span>4 godina iskustva</span>
                </address>
                <p>
                  Ime i prezime: Nevena MilovanovicAdresa: BeogradTražim posao
                  dadilje u kojem ću moći primeniti svoje veštine i iskustvo u
                  radu sa decom svih uzrasta....
                </p>
                <time dateTime='2024-09-25 10:53:25'>
                  pre 8 minuta<span>odgovara u 6 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/22736/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/37161/ana'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/16618.jpg?1705846328'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Ana M.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/37161/ana'>Ana M.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>21 godina</span>
                  <span>2 godina iskustva</span>
                  <span>od 700 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo svima :) Moje ime je Ana, imam 21. godinu i student sam
                  psihologije. Radila sam kao pedagoški asistent u vrtiću, u
                  školi, u slobodno vreme čuvala decu...
                </p>
                <time dateTime='2024-09-25 10:44:55'>
                  pre 16 minuta<span>odgovara u 4 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/37161/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/49519/jelena'>
                  <img
                    src='https://www.superhoitaja.fi/image/user.svg?1726824971'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Jelena A.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/49519/jelena'>Jelena A.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>24 godina</span>
                  <span>8 godina iskustva</span>
                  <span>od 800 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo! Moje ime je Jelena. Tražim posao dadilje. Imam 8
                  godina iskustva kao dadilja u Australiji i Srbiji. Pored toga
                  sam sertifikovana dadilja. Trenutno ž...
                </p>
                <time dateTime='2024-09-25 10:44:29'>
                  pre 17 minuta<span>odgovara u 3 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/49519/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/46643/nevena'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/49139.jpg?1722276388'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Nevena J.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/46643/nevena'>Nevena J.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>26 godina</span>
                  <span>8 godina iskustva</span>
                  <span>od 700 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo! Moje ime je Nevena. Imam 26 godina, a radim sa decom u
                  različitim kontekstima već 8 godina. Po struci sam defektolog.
                  Trenutno radim kao psihoterapeu...
                </p>
                <time dateTime='2024-09-25 10:42:02'>
                  pre 19 minuta<span>odgovara u 1 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/46643/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/49592/sonja'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/51741.jpg?1726924032'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Sonja Đ.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/49592/sonja'>Sonja Đ.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>56 godina</span>
                  <span>15 godina iskustva</span>
                  <span>od 95000 RSD&nbsp;za mesec</span>
                </address>
                <p>
                  Zdravo! Moje ime je Sonja. Tražim posao dadilje Imam 15 godina
                  iskustva. Beograd. očekujem poruku od vas.
                </p>
                <time dateTime='2024-09-25 10:38:01'>
                  pre 23 minuta<span>odgovara u 1 minuta</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/49592/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/49725/sofija'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/51850.jpg?1727147617'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Sofija M.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/49725/sofija'>Sofija M.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>34 godina</span>
                  <span>15 godina iskustva</span>
                  <span>60000-120000 RSD&nbsp;za mesec</span>
                </address>
                <p>
                  Moje ime je Sofija. Radim sa decom različitog uzrasta 15
                  godina. Majka sam dva dečaka. Jedan ima 5,5 godina, a drugi 11
                  meseci. Pišem oglas inspirisana i ohr...
                </p>
                <time dateTime='2024-09-25 10:28:36'>
                  pre 33 minuta<span>odgovara u 54 minuta</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/49725/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/25475/aleksandra'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/30585.jpg?1721025531'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Aleksandra P.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/25475/aleksandra'>Aleksandra P.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>30 godina</span>
                  <span>3 godina iskustva</span>
                  <span>800-1000 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo svima! Dragi roditelji u potrazi sam za poslom dadilje
                  na teritoriji Beograda. Sada bih vam se u kratkim crtama
                  predstavila.🌸Zovem se Aleksandra, za...
                </p>
                <time dateTime='2024-09-25 10:23:34'>
                  pre 38 minuta<span>odgovara u 1 dana</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/25475/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/45583/ljiljana'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/46655.jpg?1726823533'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Ljiljana D.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/45583/ljiljana'>Ljiljana D.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>55 godina</span>
                  <span>10 godina iskustva</span>
                  <span>od 700 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Cuvala bih dete od 4-6 sati dnevno Visegodisnje
                  iskustvo.Lokacije koje mi odgovaraju je centar do hale Pionir
                  gde živim....
                </p>
                <time dateTime='2024-09-25 10:22:33'>pre 39 minuta</time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/45583/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/32145/aleksandra'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/36703.jpg?1726487812'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Aleksandra P.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/32145/aleksandra'>Aleksandra P.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>22 godina</span>
                  <span>2 godina iskustva</span>
                  <span>600-700 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo! Moje ime je Aleksandra. Tražim posao dadilje Beograd.
                  Student sam psihologije. Imam iskustva za decom od 7m-6g-
                  nocno cuvanje-vecernje cuvanje-...
                </p>
                <time dateTime='2024-09-25 10:20:58'>
                  pre 40 minuta<span>odgovara u 2 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/32145/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li className='set'>
              <div data-redirect='/employer/type/set'>
                <span>Nemate vremena za pretragu?</span>Postavite oglas i
                dobijte ponude
              </div>
            </li>
            <li>
              <figure>
                <a href='/siterke/3896/suzana'>
                  <img
                    src='https://www.superhoitaja.fi/image/user.svg?1617048283'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Suzana C.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/3896/suzana'>Suzana C.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>56 godina</span>
                </address>
                <p>
                  Pozdrav, zovem se Suzana i imam 52 godine.Pruzam uslugu
                  cuvanja dece.Imam iskustva i preporuku od ugledne
                  porodice.Odgovorna sam i vredna, prilagoljiva i spr...
                </p>
                <time dateTime='2024-09-25 10:07:07'>
                  pre 54 minuta<span>odgovara u 7+ dana</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/3896/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/40982/andjela'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/40120.jpg?1711432244'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Andjela D.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/40982/andjela'>Andjela D.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>25 godina</span>
                  <span>5 godina iskustva</span>
                  <span>od 700 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo svima, zovem se Anđela iz Beograda sam nasilje
                  Karaburma.Imam 25godina.Dvoje dece uzrasta 5god i
                  2.5god.Čuvala bih decu radnim danima od 7h do 1...
                </p>
                <time dateTime='2024-09-25 10:05:30'>pre 56 minuta</time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/40982/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/28238/marija'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/33199.jpg?1727126750'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Marija V.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/28238/marija'>Marija V.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>22 godina</span>
                  <span>2 godina iskustva</span>
                </address>
                <p>
                  Zdravo! Moje ime je Marija, imam 22 godine. Student sam na
                  Medicinskom fakultetu. Imam iskustvo od dve godine u čuvanju
                  dece uzrasta od godinu i po do 6 go...
                </p>
                <time dateTime='2024-09-25 09:57:03'>
                  pre 1 sati<span>odgovara u 6 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/28238/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/46540/suncica'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/49058.jpg?1722160754'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Suncica S.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/46540/suncica'>Suncica S.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>67 godina</span>
                  <span>20 godina iskustva</span>
                  <span>od 432 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo! Moje ime je Suncica. Tražim posao dadilje Imam 20
                  godina iskustva. Beograd. očekujem poruku od vas.
                </p>
                <time dateTime='2024-09-25 09:53:58'>
                  pre 1 sati<span>odgovara u 1 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/46540/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/49635/danijela'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/28501.jpg?1727010738'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Danijela R.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/49635/danijela'>Danijela R.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>31 godina</span>
                  <span>4 godina iskustva</span>
                </address>
                <p>
                  Zdravo! Moje ime je Danijela. Tražim posao dadilje Imam 4
                  godina iskustva. Beograd. očekujem poruku od vas.
                </p>
                <time dateTime='2024-09-25 09:30:20'>pre 1 sati</time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/49635/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/43235/marija'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/25787.jpg?1716417001'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Marija S.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/43235/marija'>Marija S.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>46 godina</span>
                  <span>26 godina iskustva</span>
                  <span>od 800 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo! Moje ime je Marija. Tražim posao dadilje Imam 26
                  godina iskustva. Pored toga sam sertifikovan pružalac prve
                  pomoći. Beograd. očekujem poruku od vas.
                </p>
                <time dateTime='2024-09-25 09:22:41'>
                  pre 1 sati<span>odgovara u 40 minuta</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/43235/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/36509/svetlana'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/40617.jpg?1704982808'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Svetlana K.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/36509/svetlana'>Svetlana K.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>66 godina</span>
                  <span>od 500 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo! Moje ime je Svetlana. Tražim posao dadilje Beograd.
                  očekujem poruku od vas.
                </p>
                <time dateTime='2024-09-25 09:19:06'>pre 1 sati</time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/36509/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/7553/jovana'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/3570.jpg?1725367557'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Jovana B.'
                  />
                </a>
                <i className='score-5'></i>
                <span>3 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/7553/jovana'>Jovana B.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>31 godina</span>
                  <span>15 godina iskustva</span>
                  <span>od 2000 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zainteresovana sam za rad sa hipersenzibilnom decom, decom sa
                  teskocama u razvoju, autizmom i narocito sa Daunovim
                  sindromom.Ja sam filozof, šamanski ter...
                </p>
                <time dateTime='2024-09-25 09:12:31'>
                  pre 1 sati<span>odgovara u 7+ dana</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/7553/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/49653/milica'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/29880.jpg?1727033222'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Milica S.'
                  />
                </a>
                <i className='score-3'></i>
                <span>1 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/49653/milica'>Milica S.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>21 godina</span>
                  <span>1 godina iskustva</span>
                  <span>od 600 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Dragi roditelji, zelela bih da Vam se predstavim,zovem se
                  Milica i imam 21. godinu.Student sam Defektološkog fakuleta
                  (Fasper). 😊Zivim na Tasmajdanu i...
                </p>
                <time dateTime='2024-09-25 09:08:05'>
                  pre 1 sati<span>odgovara u 1 sati</span>
                </time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/49653/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <figure>
                <a href='/siterke/49260/natasa'>
                  <img
                    src='https://www.superhoitaja.fi/u/user/rs/51228.jpg?1726474059'
                    height='100'
                    width='100'
                    loading='lazy'
                    alt='Nataša S.'
                  />
                </a>
                <i className='score-0'></i>
                <span>0 preporučuje</span>
              </figure>
              <div className='article'>
                <div className='title'>
                  <a href='/siterke/49260/natasa'>Nataša S.</a>
                </div>
                <address>
                  <span>Beograd</span>
                  <span>53 godina</span>
                  <span>30 godina iskustva</span>
                  <span>od 700 RSD&nbsp;za sat</span>
                </address>
                <p>
                  Zdravo! Moje ime je Nataša. Tražim posao dadilje Imam 30
                  godina iskustva. Beograd. očekujem poruku od vas.
                </p>
                <time dateTime='2024-09-25 09:06:08'>pre 1 sati</time>
              </div>
              <ul>
                <li>
                  <span
                    className=''
                    title='Sačuvaj'
                    data-note='/ajax/note/employee/49260/set'>
                    <svg fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li className='set'>
              <div data-redirect='/employer/type/set'>
                <span>Još uvek tražite?</span>Postavite oglas i dobijte ponude
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default SittersPage;
