import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function Projects () {
  return (
    <>
      <div className='container'>
        <div className='card mt-4'>
          <div className='card-body'>
            <h2 className='head'>Projects</h2>
          </div>
        </div>
      </div>

      <div className='container1'>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item sm={6}>
            <Card sm={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                alt='Tic-Tac-Toe'
                height='400'
                image='https://i.imgur.com/1vsD4Wk.jpg'
              />
              <CardContent className='write'>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  fontFamily={'Macondo, cursive'}>
                  Tic-Tac-Toe Game
                </Typography>
                <Typography>
                  This app will allow users to know what is a straight line,
                  while playing. This app will allow users to save on paper.
                  Most of all Users can play and have fun!
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href='https://ptanand.github.io/Tic-Tac-Toe/'
                  target='_blank'
                  rel='noreferrer'>
                  {' '}
                  Tic-Tac-Toe
                </a>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={6}>
            <Card sm={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                alt='Inventory'
                height='400'
                image='https://i.imgur.com/Nn3q1YH.jpg'
              />
              <CardContent className='write'>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  fontFamily={'Macondo, cursive'}>
                  Product Inventory
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  This application allows members to see all products. A member
                  can enter a product to be displayed to other members. A member
                  can update their product/s. A member can delete their existing
                  product/s.
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href='https://ptanand.github.io/Inventory/'
                  target='_blank'
                  rel='noreferrer'>
                  Inventory
                </a>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={6}>
            <Card sm={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                alt='GSD'
                height='400'
                image='https://i.imgur.com/QwJYrwS.jpg'
              />
              <CardContent className='write'>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  fontFamily={'Macondo, cursive'}>
                  Get-Stuff-Done Task To Do List.
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  GSD-Task-Force is a task list/reminder SPA that balances power
                  and simplicity. This application allows members to quickly
                  create, organize (completed/uncompleted), search, update,
                  delete, and add due dates for each task.
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href='https://gsd-task-force.github.io/GSD-Task-Force-client/'
                  target='_blank'
                  rel='noreferrer'>
                  GST To-Do-List
                </a>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={6}>
            <Card sm={{ maxWidth: 300 }}>
              <CardMedia
                component='img'
                alt='Sarvadeo Mandir'
                height='400'
                image='https://i.imgur.com/eKn68XG.jpg'
              />
              <CardContent className='write'>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  fontFamily={'Macondo, cursive'}>
                  Sarvadeo Mandir.
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  This application allows the user to make pledges immediately.
                  - This application allows the user to know what pledges were
                  already made. - This application allows users to make, edit,
                  or cancel a pledge. - This app allows the user to connect with
                  the Temple at all times.
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href='https://ptanand.github.io/booking-client/'
                  target='_blank'
                  rel='noreferrer'>
                  Sarvadeo-Mandir
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Projects
