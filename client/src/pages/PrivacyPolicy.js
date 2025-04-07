import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
          Privacy Policy
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            1. Introduction
          </Typography>
          <Typography paragraph>
            At Dux Outsourcing, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy ("Policy") describes how we collect, use, disclose, and safeguard your information when you use our services, including our website and any related services.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            2. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect several types of information from and about users of our services, including:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Business information (company name, industry, size)</li>
            <li>Financial information necessary for service provision</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (how you interact with our services)</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            3. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the collected information for various purposes, including:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Providing and maintaining our services</li>
            <li>Processing your requests and transactions</li>
            <li>Communicating with you about our services</li>
            <li>Improving and personalizing our services</li>
            <li>Ensuring compliance with legal obligations</li>
            <li>Protecting against fraud and unauthorized access</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            4. Data Security
          </Typography>
          <Typography paragraph>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Secure data storage and transmission</li>
            <li>Employee training on data protection</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            5. Data Retention
          </Typography>
          <Typography paragraph>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law. The criteria used to determine our retention periods include:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>The length of time we have an ongoing relationship with you</li>
            <li>Whether there is a legal obligation to which we are subject</li>
            <li>Whether retention is advisable in light of our legal position</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            6. Your Rights
          </Typography>
          <Typography paragraph>
            You have certain rights regarding your personal information, including:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to object to certain processing activities</li>
            <li>The right to data portability</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            7. Changes to This Policy
          </Typography>
          <Typography paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes your acknowledgment of the modified Policy.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            8. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography>Email: duxoutsourcing@gmail.com</Typography>
            <Typography>Phone: +91 92122 50127</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy; 