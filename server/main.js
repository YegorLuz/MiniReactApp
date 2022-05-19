const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const FileReader = require('./FileReader');

const app = express();
app.use(cors());
app.use(express.json())

const SECRET_KEY = '_secret_key';
const EXPIRATION = 60 * 60 * 24;

app.use((req, res, next) => {
  if (req.path !== '/login') {
    try {
      const token = req.headers.authorization.split(' ')[1];

      if (token) {
        const decoded = jwt.verify(token, SECRET_KEY);
        const { login, password } = decoded;
        const users = FileReader.getUsers();
        const user = users.find(u => u.login === login && u.password === password);

        if (!user) {
          throw Error('Unauthorized');
        } else {
          res.locals.name = user.name;
          res.locals.role = user.role;
        }
      } else {
        throw Error('Unauthorized');
      }
    } catch (error) {
      res.status(401).send({ message: 'Unauthorized' });
    }
  }
  next();
});

app.post('/login', (req, res) => {
  const { login, password } = req.body;
  const users = FileReader.getUsers();
  const user = users.find(u => u.login === login && u.password === password);

  if (user) {
    const { name, role } = user;
    const token = jwt.sign({ login, password }, SECRET_KEY, {algorithm: 'HS256', expiresIn: EXPIRATION});
    res.status(200).send({ name, role, token });
  } else {
    res.status(401).send({ message: 'Incorrect Login or Password' });
  }
});

app.get('/text', (req, res) => {
  res.status(200).send({
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices sapien ac tempus fringilla. Proin eget malesuada nisl. Nulla egestas libero id tristique sodales. In eros odio, laoreet ac eleifend ut, congue sit amet augue. Nullam volutpat, erat at varius euismod, diam nulla faucibus libero, sed suscipit felis erat ut mauris. Aenean lobortis diam non metus dignissim dapibus ac semper turpis. Ut justo neque, tempus nec tempor ut, suscipit at est. Praesent efficitur aliquam sem, eu imperdiet nibh ultrices eu.\nProin interdum felis sed ex euismod, vitae porta arcu efficitur. Curabitur lorem risus, consequat vitae dolor quis, dictum elementum dolor. Duis lobortis turpis eu sapien tincidunt gravida. Nullam gravida libero id orci placerat viverra. Phasellus consequat suscipit accumsan. Donec pulvinar, diam sit amet sodales elementum, ipsum dolor pharetra erat, nec porttitor felis purus eu ligula. Donec blandit euismod ante. Vestibulum consectetur lacus in lacus semper, sit amet suscipit libero consectetur. Vivamus ac mi nibh. Suspendisse viverra mollis nibh, sit amet sollicitudin purus rutrum ut. Curabitur vitae purus ut arcu vestibulum accumsan.\nAliquam non nulla risus. Ut suscipit condimentum nisi, ut commodo sapien efficitur vitae. Praesent sit amet consectetur enim. Vestibulum commodo justo leo, nec dapibus lorem viverra vitae. Duis hendrerit laoreet velit, ac rhoncus diam ultrices id. Fusce et auctor libero, nec interdum nisi. Nulla facilisi. Maecenas in eros molestie, facilisis nibh at, interdum justo. Aenean diam lectus, lacinia ut efficitur quis, fringilla sed elit. Vivamus accumsan ut nisl ornare malesuada. Sed eu lacus quam. Suspendisse tristique arcu eu risus venenatis, vel aliquet nunc consequat.\nInteger hendrerit, nibh vitae suscipit elementum, turpis risus tempor dolor, eget suscipit est libero vestibulum mauris. Integer tincidunt dignissim laoreet. In ac hendrerit sem. Phasellus a aliquet purus. Nam non cursus odio. Cras rutrum lectus non nibh consequat, et faucibus erat accumsan. Morbi a nunc sit amet risus pharetra gravida. Aenean a est eget nulla porta finibus in et purus. Etiam mattis eu turpis convallis feugiat. Nullam scelerisque dui quis odio interdum blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis vestibulum dolor. Aliquam vehicula erat sit amet massa pellentesque, id auctor odio vestibulum.\nMaecenas sed nunc et eros interdum pretium vitae eget lectus. Ut posuere sapien varius enim consectetur condimentum. Phasellus sed leo in nunc molestie bibendum. Vestibulum ac aliquet nisl, id fringilla turpis. Sed ullamcorper eleifend diam et porttitor. Nullam vulputate velit erat, non tincidunt velit gravida non. Sed vitae elit id augue rhoncus mollis. Nullam pharetra orci arcu, eu porta sapien semper non.`,
  });
});

app.get('/verify', (req, res) => {
  res.status(200).send({
    role: res.locals.role,
    name: res.locals.name,
  });
});

app.listen(3333, () => {
  console.log('Started - PORT:3333');
});