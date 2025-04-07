import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Alert,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';

const Admin = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [articles, setArticles] = useState([]);
  const [services, setServices] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === 0) {
          const response = await axios.get('/api/articles');
          setArticles(response.data);
        } else {
          const response = await axios.get('/api/services');
          setServices(response.data);
        }
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, [activeTab]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenDialog = (type, item = null) => {
    setDialogType(type);
    if (item) {
      setFormData(item);
    } else {
      setFormData({
        title: '',
        description: '',
        content: '',
        image: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      title: '',
      description: '',
      content: '',
      image: '',
    });
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (dialogType === 'add') {
        const newItem = {
          ...formData,
          _id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        };
        
        if (activeTab === 0) {
          const updatedArticles = [...articles, newItem];
          setArticles(updatedArticles);
          localStorage.setItem('articles', JSON.stringify(updatedArticles));
        } else {
          const updatedServices = [...services, newItem];
          setServices(updatedServices);
          localStorage.setItem('services', JSON.stringify(updatedServices));
        }
        setSuccess('Item added successfully');
      } else {
        if (activeTab === 0) {
          const updatedArticles = articles.map(item => 
            item._id === formData._id ? formData : item
          );
          setArticles(updatedArticles);
          localStorage.setItem('articles', JSON.stringify(updatedArticles));
        } else {
          const updatedServices = services.map(item => 
            item._id === formData._id ? formData : item
          );
          setServices(updatedServices);
          localStorage.setItem('services', JSON.stringify(updatedServices));
        }
        setSuccess('Item updated successfully');
      }
      handleCloseDialog();
    } catch (err) {
      setError('Failed to save changes');
    }
  };

  const handleDelete = async (id) => {
    try {
      if (activeTab === 0) {
        const updatedArticles = articles.filter(item => item._id !== id);
        setArticles(updatedArticles);
        localStorage.setItem('articles', JSON.stringify(updatedArticles));
      } else {
        const updatedServices = services.filter(item => item._id !== id);
        setServices(updatedServices);
        localStorage.setItem('services', JSON.stringify(updatedServices));
      }
      setSuccess('Item deleted successfully');
    } catch (err) {
      setError('Failed to delete item');
    }
  };

  useEffect(() => {
    // Load saved data from localStorage
    const savedArticles = JSON.parse(localStorage.getItem('articles') || '[]');
    const savedServices = JSON.parse(localStorage.getItem('services') || '[]');
    setArticles(savedArticles);
    setServices(savedServices);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Articles" />
            <Tab label="Services" />
          </Tabs>
        </Paper>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog('add')}
        >
          Add {activeTab === 0 ? 'Article' : 'Service'}
        </Button>
      </Box>

      <Grid container spacing={3}>
        {activeTab === 0
          ? articles.map((article) => (
              <Grid item xs={12} sm={6} md={4} key={article._id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      color="primary"
                      onClick={() => handleOpenDialog('edit', article)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(article._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service._id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      color="primary"
                      onClick={() => handleOpenDialog('edit', service)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(service._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {dialogType === 'add' ? 'Add' : 'Edit'} {activeTab === 0 ? 'Article' : 'Service'}
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              margin="normal"
              required
              multiline
              rows={2}
            />
            <TextField
              fullWidth
              label="Content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {dialogType === 'add' ? 'Add' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Admin; 