import React from 'react';
import PropTypes from 'prop-types'

const Image = ({ image }) => {
    const { largeImageURL, likes, previewURL, tags, views } = image

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img src={previewURL} alt={tags} className='card-img-top' style={{height: '151px'}} />
                <div className='card-body'>
                    <strong><p className='card-text'>{likes.toLocaleString('en')} Me Gusta</p></strong>
                    <strong><p className='card-text'>{views.toLocaleString('en')} Vistas</p></strong>
                </div>
                <div className='card-footer'>
                    <a
                        href={largeImageURL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-block'>
                        Ver Imagen
                </a>
                </div>
            </div>

        </div>
    );
};

Image.propTypes = {
    image: PropTypes.object.isRequired
}

export default Image;