import React, { useEffect, useState } from 'react';
import { fetchScrapedArticles } from '../src/Api';
import axios from "axios";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    // export const fetchScrapedArticles = async () => {
    //     try {
    //         const response = await api.get('scrape-articles/');
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error fetching scraped articles:', error);
    //         return [];
    //     }
    // };
    
    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
          window.location.href = '/login';
        } else {
          (async () => {
            try {
              const { data } = await axios.get(
                'http://127.0.0.1:8000/api/scrape-articles/', {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              );
              setArticles(data);
            } catch (e) {
              console.log('not auth', e);
            }
          })();
        }
      }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {articles.map((article, index) => (
                <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10' key={index}>
                <div key={article.title}>
                    <h5 className='card-title display-6 ml-5 text-start fs-2'>{article.title}</h5>
                    <p className='card-text fs-5 ml-5 text-start mb-5'>{article.content}</p>
                </div>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;

