import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

import { fetchQuote, selectQuote } from '../Redux/QuoteSlice'

const Quote = () => {

  const dispatch = useDispatch();
  const { content, author } = useSelector(selectQuote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch])

  const generateQuote = () => {
    dispatch(fetchQuote())
    console.log(content);
    console.log(author);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', zIndex: 1 }}>

        <Card style={{ width: '400px', margin: "20px", boxShadow:"0 0 10px 0px black" }}>
          <CardContent>
            {!content ? (
              <>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="rectangular" height={40} width="80%" style={{ marginBottom: '10px' }} />
              </>
            ) : (
              <>
                <Typography variant='h5'>
                  <p>{content}</p>
                </Typography>
                <Typography style={{ fontSize: "20px", display: "flex", justifyContent: "end" }} color="textSecondary" gutterBottom>
                  <p style={{ margin: "0px" }}>~ {author}</p>
                </Typography>
                <Button variant="contained" onClick={generateQuote}>
                  Generate
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Quote;