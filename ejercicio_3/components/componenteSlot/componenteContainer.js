let componenteContainer= {
  template: `
    <div class="container-fluid">
        <header>
            <slot name="header">
                <p>Contenido del header</p>
            </slot>
        </header>
        <main>
            <slot name="main">
                <p>Contenido del main</p>
            </slot>
        </main>
        <footer>
            <slot name="footer">
                <p>contenido del footer</p>
            </slot>
        </footer>
  </div>
    `
};
