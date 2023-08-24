// getStaticProps: Executado no servidor Node.js
export async function getStaticProps() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await resposta.json()
  return {
    props: {
      todos,
    },
  }
}