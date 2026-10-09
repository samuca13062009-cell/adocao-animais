export default function About() {
  return (
    <div className="about">
      <h1>Sobre a Patinhas</h1>
      <p>
        A Patinhas é uma aplicação de adoção de animais desenvolvida em React no âmbito do curso de React JS.
        O objetivo é ligar cães e gatos que precisam de um lar a famílias que os queiram receber.
      </p>
      <h2>Funcionalidades</h2>
      <ul>
        <li>Listagem de animais disponíveis com nome, tipo e imagem</li>
        <li>Página de detalhe com descrição, idade, porte e localização</li>
        <li>Pesquisa por nome e filtros por tipo, raça e localização</li>
        <li>Favoritos guardados no navegador</li>
      </ul>
      <h2>Tecnologias</h2>
      <ul>
        <li>React (componentes funcionais, JSX, props e state)</li>
        <li>Hooks: useState, useEffect, useMemo e hooks personalizados (useAnimals, useAnimal, useFavorites)</li>
        <li>React Router para navegação entre páginas</li>
        <li>APIs externas: Dog CEO API e The Cat API para as imagens</li>
        <li>Vite e GitHub Pages para build e alojamento</li>
      </ul>
    </div>
  )
}
