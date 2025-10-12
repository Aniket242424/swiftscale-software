# 📊 Google Analytics Setup Guide

## Step 1: Create Google Analytics Account (FREE)

1. Go to: https://analytics.google.com/
2. Click **"Start measuring"**
3. Enter Account name: `SwiftScale Software`
4. Click **Next**

## Step 2: Set Up Property

1. Property name: `SwiftScale Website`
2. Time zone: `India (GMT+5:30)`
3. Currency: `Indian Rupee (INR)`
4. Click **Next**

## Step 3: Get Tracking ID

1. Choose industry category: `Computer & Electronics`
2. Business size: Select your size
3. Click **Create**
4. Accept Terms of Service
5. Copy your **Measurement ID** (looks like: `G-XXXXXXXXXX`)

## Step 4: Add Tracking Code to Your Website

### Option A: Add to index.html (Recommended)

Open `public/index.html` and add this code **inside the `<head>` section**:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
<!-- End Google Analytics -->
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID!**

### Option B: Using React Component (Advanced)

I've created a `GoogleAnalytics.js` component in `src/components/` that you can use.

## Step 5: Test Your Setup

1. Deploy your website to Vercel
2. Visit your website
3. Go back to Google Analytics
4. Click on **"Realtime"** in the left sidebar
5. You should see yourself as an active user!

## Step 6: Submit to Google Search Console

1. Go to: https://search.google.com/search-console/
2. Click **"Add Property"**
3. Enter your domain: `swiftscale.software`
4. Choose verification method: **HTML tag** (easiest)
5. Copy the meta tag
6. Add it to your `public/index.html` in the `<head>` section
7. Click **Verify**
8. Submit your sitemap: `https://swiftscale.software/sitemap.xml`

## Expected Results

- **Google will index your site within 3-7 days**
- **Google Analytics will start tracking immediately**
- **Search Console will show crawl data within 24-48 hours**

## Cost

✅ **100% FREE Forever** - No credit card required!

## What You'll Get

- Track number of visitors
- See which pages are most popular
- Know where visitors come from
- Track conversions and goals
- Mobile vs Desktop traffic
- Real-time visitor data

---

Need help? Let me know and I'll add the tracking code for you! Just provide your Measurement ID.

