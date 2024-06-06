import React, { useEffect, useState } from 'react';
import { fetchScrapedArticles } from '../src/Api';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const articles = await fetchScrapedArticles();
                setArticles(articles);
            } catch (error) {
                setError('Failed to fetch articles.');
            }
        };
        getArticles();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {articles.map((article) => (
                <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10'>
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

