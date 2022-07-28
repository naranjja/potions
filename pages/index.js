import RecipeCard from "../components/RecipeCard";
import FilterModal from "../components/FilterModal";
import Layout from "../components/Layout";
import { Stack, Divider, TextField, Button } from "@mui/material";
import clientPromise from '../lib/mongodb';
import { useState } from "react";

const filterResultsByName = (recipes, searching) => {
  return recipes.filter(x => x.name.toLowerCase().includes(searching.toLowerCase()));
}

const filterResultsByPoison = (recipes, selectedPoisons) => {
  if (selectedPoisons.length > 0) {
    return recipes.filter(recipe => recipe.poisons.some(x => selectedPoisons.includes(x)));
  }
  return recipes;
}

export default function Home({ isConnected, recipes, poisons }) {

  const [searching, setSearching] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState(recipes);

  return (
    <Layout>

      <Stack direction="row">
      
        <TextField
          value={searching}
          onChange={(e) => {
            setSearching(e.target.value);
            setResults(filterResultsByName(recipes, e.target.value));
          }}
          label="Search recipes"
          type="search"
          style={{ width: "100%" }}
        />

        <Button 
          onClick={() => setShowFilters(true)}
          variant="contained" 
          disableElevation
          style={{ marginLeft: 15, paddingLeft: 25, paddingRight: 25 }}
        >
          Filter
        </Button>

      </Stack>

      <FilterModal 
        showFilters={showFilters}
        setShowFilters={setShowFilters}

        recipes={recipes}
        setResults={setResults}

        poisons={poisons}
        filterResultsByPoison={filterResultsByPoison}
      />

      <Divider style={{ marginTop: 30, marginBottom: 10 }}>{results.length} RECIPE{results.length !== 1 ? "S" : ""}</Divider>

      { isConnected && (
        <Stack>
          {results.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
        </Stack>
      ) }

    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = await client.db("recepi")

    const recipes = await db.collection("recipes").find({}).toArray();

    let poisons = recipes.map(x => x.poisons);
    poisons = [...new Set(poisons.flat())];

    return {
      props: { isConnected: true, recipes, poisons },
    }

  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false, recipes: [], poisons: [] },
    }
  }
}