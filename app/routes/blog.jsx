import React from 'react'
import { getPosts } from '~/models/posts.server';
import { Outlet, useLoaderData } from '@remix-run/react';
import styles from '~/styles/blog.css'
import ListadoPosts from '../components/listado-posts';

export const meta = () => {
    return [
        { title: `GuitarLA - Nuestro Blog` },
        { description: `GuitarLA, Blog de música y venta de guitarras` },
    ];
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ];
}

export async function loader() {
    const posts = await getPosts();
    return posts.data;
}

const Blog = () => {

    const posts = useLoaderData();

    return (
        <main className='contenedor'>
            <ListadoPosts posts={posts} />
            <Outlet />
        </main>
    )
}

export default Blog;