import React from 'react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export const meta = () => {
    return [
        { title: "GuitarLA - Sobre Nosotros" },
        { description: "Venta de Guitarras, Blog de Música" },
    ];
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ];
}

const Nosotros = () => {

    return (
        <main className='contenedor nosotros'>
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen de nosotros" />
                <div>
                    <p>
                        Quisque sit amet tellus suscipit, tristique lacus ut, pretium diam. Proin at tellus et dui semper varius.
                        Praesent sollicitudin est lacinia, sodales lorem ac, viverra lectus. Sed sit amet mauris gravida, venenatis
                        justo nec, tincidunt velit. Nunc vehicula id ex eu scelerisque. Morbi vel tortor molestie, auctor eros et,
                        scelerisque nibh. Sed accumsan tellus sem, ut finibus lacus tristique a. Donec eu finibus lectus. Nulla justo
                        urna, fermentum auctor congue sed, placerat eget odio.
                    </p>
                    <p>
                        Quisque sit amet tellus suscipit, tristique lacus ut, pretium diam. Proin at tellus et dui semper varius.
                        Praesent sollicitudin est lacinia, sodales lorem ac, viverra lectus. Sed sit amet mauris gravida, venenatis
                        justo nec, tincidunt velit. Nunc vehicula id ex eu scelerisque. Morbi vel tortor molestie, auctor eros et,
                        scelerisque nibh. Sed accumsan tellus sem, ut finibus lacus tristique a. Donec eu finibus lectus. Nulla justo
                        urna, fermentum auctor congue sed, placerat eget odio.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros;