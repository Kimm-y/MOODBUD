
import requests
from bs4 import BeautifulSoup

def fetch_article_links(base_url):
    response = requests.get(base_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
   
    links = soup.select('a.article-link')
    return [link['href'] for link in links]

def fetch_article_content(article_url):
    response = requests.get(article_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    title = soup.select_one('h1.article-title').get_text(strip=True)
    content = soup.select_one('div.article-content').get_text(strip=True)
    return {'title': title, 'content': content}

def scrape_articles(base_url):
    article_links = fetch_article_links(base_url)
    articles = []
    for link in article_links:
        article = fetch_article_content(link)
        articles.append(article)
    return articles

if __name__ == '__main__':
    base_url = 'https://www.psychologytoday.com/us/blog'
    articles = scrape_articles(base_url)
    for article in articles:
        print(f"Title: {article['title']}\nContent: {article['content']}\n")
