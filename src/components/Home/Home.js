import { MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Categories from '../../Data/Categories'
import './Home.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false)

    const history = useHistory()

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        }
        else {
            setError(false)
            fetchQuestions(category, difficulty);
            history.push("/quiz")
        }

    }
    return (
        <div className="content">
            <div className="settings">

                <div className="settings__select">
                    {error && <ErrorMessage>Please Fill all the Fields</ErrorMessage>}
                    <TextField
                        style={{ marginBottom: 25, backgroundColor: '#fff', borderRadius: '3px', textDecoration: 'none' }}
                        label="Enter your Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        select
                        label="Selected Category"
                        variant="outlined"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        style={{ marginBottom: 30, backgroundColor: '#fff', borderRadius: '3px' }}
                    >
                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))

                        }
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        variant="outlined"
                        style={{ marginBottom: 30, backgroundColor: '#fff', borderRadius: '3px' }}
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>

                    <button
                        className="button"
                        onClick={handleSubmit}>
                        Start
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home
