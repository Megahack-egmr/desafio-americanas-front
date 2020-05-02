import { TextOverflowPipe } from './text-overflow.pipe';

describe('TextOverflowPipe', () => {
  it('create an instance', () => {
    const pipe = new TextOverflowPipe();
    expect(pipe).toBeTruthy();
  });

  it('must return text with ellipsis', () => {
    const pipe = new TextOverflowPipe();
    const text = pipe.transform('americanas', 3);
    expect(text).toContain('...');
  });

  it('must return text without ellipsis', () => {
    const pipe = new TextOverflowPipe();
    const text = pipe.transform('americanas', null);
    expect(text).not.toContain('...');
  });

  it('must return text without ellipsis when size is bigger than text length', () => {
    const pipe = new TextOverflowPipe();
    const text = pipe.transform('americanas', 12);
    expect(text).not.toContain('...');
  });
});
