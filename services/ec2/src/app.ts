import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(cors());

app.get('/ec2', async (req: Request, res: Response) => {
  console.log('event :', req);

  res
    .status(200)
    .json({
      id: req.headers.referer,
      message: 'Welcome from AWS EC2!'
    })

});

app.listen(port, () => console.log(`Listening on ${port}...`));
