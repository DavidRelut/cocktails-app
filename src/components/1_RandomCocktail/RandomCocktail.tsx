import { FC, useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Cocktail } from '../../types/cocktails'
import CocktailCard from '../CocktailCard/CocktailCard'
import { cocktailAction } from '../../redux/slices/cocktailsSlice'

const RandomCocktail: FC = () => {
  // const cocktail: Cocktail | undefined = undefined
  const cocktail = useAppSelector((state) => state.cocktail)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(cocktailAction.getRandomCocktail())
  }

  return (
    <Stack direction={'column'} alignItems="center" spacing={4}>
      <Typography variant="body1">En panne d'inspiration ?</Typography>
      <Button variant={'outlined'} color="secondary" onClick={handleClick}>
        Trouve moi un cocktail
      </Button>
      {cocktail && <CocktailCard cocktail={cocktail} />}
    </Stack>
  )
}

export default RandomCocktail
