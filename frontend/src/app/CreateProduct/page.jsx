"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const URI = 'http://localhost:8000/sells/';

const CompCreateBlog = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userName, setUserName] = useState('');

    const router = useRouter();

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const store = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('title', title);
        formData.append('tags', tags);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('user_email', userEmail);
        formData.append('user_phone', userPhone);
        formData.append('user_name', userName);
      
        try {
          await axios.post(URI, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          router.push('/');
        } catch (error) {
          console.error('Error al crear el post:', error);
        }
    };
          
    return (
        <div>
            <h3>
               Crear post
            </h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Título</label>
                    <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Etiquetas</label>
                    <input 
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        className='form-control'
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Imagen</label>
                    <input 
                        id="image" 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        className="form-control" 
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Email de usuario</label>
                    <input 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="email"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Teléfono de usuario</label>
                    <input 
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        type="tel"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Nombre de usuario</label>
                    <input 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    );
};

export default CompCreateBlog;
