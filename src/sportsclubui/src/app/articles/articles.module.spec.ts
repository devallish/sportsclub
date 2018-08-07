import { ArticlesModule } from '@sc/articles/articles.module';

describe('ArticlesModule', () => {
  let articlesModule: ArticlesModule;

  beforeEach(() => {
    articlesModule = new ArticlesModule();
  });

  it('should create an instance', () => {
    expect(articlesModule).toBeTruthy();
  });
});
