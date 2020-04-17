import Router from './index.js'

const routerOptions = {
      historyMode: true
}
const router = new Router(routerOptions);

router.get('/', function(req){
      router.query.get('q');
      console.log(req.path); // outputs /about-me to the console
});

router.get('/register', function(req){
      console.log(req.path); // outputs /about-me to the console
});

router.init();

export default router;