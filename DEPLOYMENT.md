# Deployment Guide - Rang & Mall

This guide provides step-by-step instructions for deploying your world-class Rang & Mall website to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers the best deployment experience.

#### Deploy Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - World-class Rang & Mall website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Vercel automatically handles:**
- Build optimization
- Edge network CDN
- Automatic HTTPS
- Serverless functions
- Preview deployments for PRs

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Option 3: Docker Deployment

The project includes a Dockerfile for containerized deployment.

#### Build and Run:

```bash
# Build the Docker image
docker build -t rang-mall .

# Run the container
docker run -p 5555:5555 rang-mall
```

#### Deploy to Cloud Platforms:

**AWS ECS:**
```bash
# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag rang-mall:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/rang-mall:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/rang-mall:latest
```

**Google Cloud Run:**
```bash
gcloud builds submit --tag gcr.io/<project-id>/rang-mall
gcloud run deploy rang-mall --image gcr.io/<project-id>/rang-mall --platform managed
```

### Option 4: Traditional VPS (DigitalOcean, Linode, etc.)

1. **Set up Node.js on server**
   ```bash
   # Install Node.js 18+
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

2. **Clone and build**
   ```bash
   git clone <your-repo-url>
   cd Rang-Mall-main
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "rang-mall" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:5555;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## ⚙️ Environment Variables

Create a `.env.local` file for environment-specific configuration:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# API Keys (if needed)
NEXT_PUBLIC_API_URL=https://api.yourcompany.com

# Feature Flags
NEXT_PUBLIC_ENABLE_BLOG=true
NEXT_PUBLIC_ENABLE_CAREERS=true
```

## 🔧 Build Configuration

### Production Optimizations

The project is already configured for production with:

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Compression**: Gzip/Brotli compression enabled
- **Caching**: Static assets cached for 1 year
- **Minification**: CSS and JS minification

### Performance Checklist

Before deploying, ensure:

- [ ] All images are optimized (WebP format where possible)
- [ ] Unused dependencies removed
- [ ] Console.log statements removed
- [ ] Source maps disabled for production
- [ ] Analytics configured
- [ ] SEO meta tags populated
- [ ] Sitemap generated
- [ ] robots.txt configured

## 📊 Monitoring & Analytics

### Recommended Tools

1. **Vercel Analytics** (if using Vercel)
   - Automatic Web Vitals tracking
   - Real user monitoring
   - Edge function metrics

2. **Google Analytics**
   ```tsx
   // Add to app/layout.tsx
   import Script from 'next/script'
   
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   ```

3. **Sentry** (Error tracking)
   ```bash
   npm install @sentry/nextjs
   ```

## 🔒 Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **HTTPS**: Always use HTTPS in production
3. **CSP Headers**: Configure Content Security Policy
4. **Rate Limiting**: Implement API rate limiting
5. **CORS**: Configure CORS appropriately

## 🚦 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📈 Performance Targets

Your world-class website should achieve:

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🆘 Troubleshooting

### Build Failures

**Issue**: Build fails with TypeScript errors
```bash
# Fix type issues
npm run build -- --no-type-check  # Temporary workaround
```

**Issue**: Out of memory during build
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Runtime Issues

**Issue**: Animations not working
- Ensure Framer Motion is properly installed
- Check for conflicting CSS

**Issue**: Images not loading
- Verify image paths
- Check Next.js image configuration

## 📞 Support

For deployment issues:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Review [Vercel Deployment Docs](https://vercel.com/docs)
- Contact support@rangmall.com

---

**Happy Deploying! 🚀**
