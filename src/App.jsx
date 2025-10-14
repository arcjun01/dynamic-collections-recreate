import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import data from "./players"

export default function App() {
  const contentElements = data.map((content) => {
    return (
      <Content 
        key={content.id}
        content={content}
      />
    )
  })

  return (
    <>
      <Header />
      <main>
        {contentElements}
      </main>
      <Footer/>
    </>
  )

}

