import Link from 'next/link'
import Layout from '../components/Layout'
import WOW from 'react-wow'

const DefaultLayout = () => (
  <Layout>
    <div className="d-flex flex-column align-items-center justify-content-center home-index">
      <WOW animation="fadeInUp" delay="100ms" duration="500ms">
        <h2>Welcome To React NextJS Application!</h2>
      </WOW>
      <WOW animation="fadeInUp" delay="300ms" duration="500ms">
        <h4>Choose what you want to do here!</h4>
      </WOW>
      <WOW animation="fadeInUp" delay="500ms" duration="500ms">
        <div>
          <Link href="/weather">
            <a className="btn btn-primary px-4 py-2 mx-3">Weather</a>
          </Link>
          <Link href="/news">
            <a className="btn btn-primary px-4 py-2 mx-3">News</a>
          </Link>
        </div>
      </WOW>
    </div>
  </Layout>
)

export default DefaultLayout
