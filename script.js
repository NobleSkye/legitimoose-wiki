document.addEventListener('DOMContentLoaded', () => {
    // Basic wiki functionality
    const wiki = {
        init() {
            this.setupEditing();
            this.setupSearch();
        },

        setupEditing() {
            const editButtons = document.querySelectorAll('.edit-btn');
            editButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const articleId = e.target.dataset.articleId;
                    const content = document.querySelector(`#article-${articleId}`);
                    const editor = document.createElement('textarea');
                    editor.value = content.innerHTML;
                    content.replaceWith(editor);
                });
            });
        },

        setupSearch() {
            const searchInput = document.querySelector('#search');
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const articles = document.querySelectorAll('.wiki-article');
                const newPageBtn = document.querySelector('#new-page-btn');
                
                newPageBtn.addEventListener('click', () => {
                    const title = prompt('Enter page title:');
                    if (title) {
                        const newArticle = document.createElement('div');
                        newArticle.className = 'wiki-article';
                        newArticle.innerHTML = `
                            <h2>${title}</h2>
                            <button class="edit-btn" data-article-id="${articles.length + 1}">Edit</button>
                            <div id="article-${articles.length + 1}">New page content...</div>
                        `;
                        document.querySelector('#articles-container').appendChild(newArticle);
                    }
                });
                
                articles.forEach(article => {
                    const text = article.textContent.toLowerCase();
                    article.style.display = text.includes(query) ? 'block' : 'none';
                });
            });
        }
    };

    // Initialize wiki functionality
    wiki.init();
});