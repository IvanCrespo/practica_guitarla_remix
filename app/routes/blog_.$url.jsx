import React from 'react'
import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server';
import { formatearFecha } from '~/utils/helpers';
import styles from '~/styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ];
}

export const meta = ({ data }) => {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    { description: `Guitarras, venta de guitarras, post ${data.data[0].attributes.titulo}` },
  ];
}

export async function loader({ params }) {
  const { url } = params;
  const post = await getPost(url);
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado'
    })
  }
  return post;
}

function Post() {

  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes;

  return (
    <article className='contenedor post mt-3'>
      <img className='imagen' src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className='texto'>{contenido}</p>
      </div>
    </article>
  )
}


export default Post;