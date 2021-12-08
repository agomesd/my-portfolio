import { useState } from 'react';
import { supabase } from '../utils/supabase';

import styles from '../styles/components/AddProjectForm.module.css';

const AddProjectForm = ({ handleCloseModal }) => {
  const [ title, setTitle ] = useState('');
  const [ imageUrl, setImageUrl ] = useState('');
  const [ websiteUrl, setWebsiteUrl ] = useState('');
  const [ repoUrl, setRepoUrl ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ error, setError ] = useState('')

  const handleChildClick = (e) => {
    e.stopPropagation();
  }

  const handleSubmit = async () => {

    if (title.length > 0 && websiteUrl.length > 0 && description.length > 0 && imageUrl.length > 0) {
      const { data, error } = await supabase.from('projects').insert([
        {
          title: title.trim(),
          image_url: imageUrl.trim(),
          description: description.trim(),
          url: websiteUrl.trim(),
          repo_url: repoUrl.trim()
        }
      ]);

      if (data) {
        alert('Project Succesfully Added!')
      }

      if (error) {
        setError(error.message)
      }

    } else {
      setError('All fields must containt a valid string.');
    }
  }

  return (
    <form className={styles.container} onClick={handleChildClick}>
      <h1>Add Project</h1>
      <label className={styles.label} forHtml="title">
        Title
      </label>
      <input
        className={styles.input}
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    <label className={styles.label} forHtml="website-url">
        Website Url
      </label>
      <input
        className={styles.input}
        type="text"
        name="website-url"
        id="website-url"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
        required
      />
    <label className={styles.label} forHtml="repo-url">
        Repo Url
      </label>
      <input
        className={styles.input}
        type="text"
        name="repo-url"
        id="repo-url"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        required
      />
      <label className={styles.label} forHtml="title">
        Image Url
      </label>
      <input
        className={styles.input}
        type="text"
        name="image-url"
        id="image-url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <label className={styles.label} forHtml="description">
        Description
      </label>
      <textarea
        className={styles.input}
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      {error && (
        <p style={{ color: '#f04854' }}>{error}</p>
      )}
      <button className={styles.button} onClick={handleSubmit}>Add Project</button>
    </form>
  )
}

export default AddProjectForm
