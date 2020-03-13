let componenteContainer= {
  template: `
    <div class="container-fluid">
        <header>
            <slot>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </slot>
        </header>
        <main>
            <slot name="mainxx">
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
