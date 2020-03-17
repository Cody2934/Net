const request = require('supertest');
const app = require('../lib/app.js');

describe('app routes', () => {
  it('retrieves the / html page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(`<html>
<body>hi
</body>
</html>`);
      });
  });
  it('retrieves the echo html page', () => {
    return request(app)
      .get('/echo')
      .then(res => {
        expect(res.text).toEqual(`<html>
<body>
</body>
</html>`);
      });
  });
  it('retrieves the red html page', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`<html>
<body>
<h1>red</h1>
</body>
</html>`);
      });
  });
  it('retrieves the green html page', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`<html>
<body>
<h1>green</h1>
</body>
</html>`);
      });
  });
  it('retrieves the blue html page', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual(`<html>
<body>
<h1>blue</h1>
</body>
</html>`);
      });
  });
});
