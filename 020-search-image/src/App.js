import { Formik, Form, Field } from 'formik'
import { useState } from 'react';

import './assets/css/header.css';
import './assets/css/content.css';
import './assets/css/article.css';

const App = () => {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({ photos })

  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            // llamar a api de unsplash
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  'Authorization': 'Client-ID -u9LVAapusVoSctrmOoMJfTUKWszumk7UOQmT_FbLqg'
                }
              })
            const data = await response.json()
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik>
      </header>
      <div className='container'>
        <div className='center'>
          {photos.map(photo =>
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} alt={photo.alt_description}/>
              <p>{[photo.description, photo.alt_description].join(' - ')}</p>
            </article>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
