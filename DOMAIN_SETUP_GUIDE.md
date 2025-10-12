# 🌐 Custom Domain Setup Guide for Vercel

## 💰 Recommended Domain Providers (Cheapest in India)

| Provider | .com Price (First Year) | Renewal | Link |
|----------|------------------------|---------|------|
| **GoDaddy India** | ₹199-499 | ₹799-999 | https://www.godaddy.com/en-in |
| **Hostinger India** | ₹599-799 | ₹899-999 | https://www.hostinger.in |
| **Namecheap** | ₹700-900 | ₹900-1000 | https://www.namecheap.com |
| **Porkbun** | ₹700-800 | ₹700-800 | https://porkbun.com |

### Budget Options (Non-.com)
- `.xyz` domain: ₹80-250/year
- `.site` domain: ₹150-300/year
- `.tech` domain: ₹500-700/year

---

## 🚀 Step-by-Step: Connect Domain to Vercel

### Step 1: Deploy Your Site to Vercel (If Not Already Done)

1. Go to: https://vercel.com/
2. Sign up with GitHub
3. Click **"Add New"** → **"Project"**
4. Import your SwiftScale repository
5. Click **"Deploy"** (no configuration needed!)
6. Your site will be live at: `your-project-name.vercel.app`

### Step 2: Buy Your Domain

1. Choose a provider from above
2. Search for your desired domain name
   - Example: `swiftscale.com`, `swiftscaleindia.com`, `swiftscale.tech`
3. Complete the purchase
4. **DON'T buy hosting** - You already have FREE hosting on Vercel!

### Step 3: Add Domain to Vercel

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Click on your **SwiftScale project**
3. Click **"Settings"** tab
4. Click **"Domains"** in the left sidebar
5. Enter your domain name (e.g., `swiftscale.com`)
6. Click **"Add"**

### Step 4: Configure DNS Settings

Vercel will show you DNS records to add. You have 2 options:

#### Option A: Using A Records (Recommended for most providers)

Go to your domain provider's DNS settings and add:

**For root domain (swiftscale.com):**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### Option B: Using CNAME (If A records don't work)

```
Type: CNAME
Name: @ (or leave blank)
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 5: Wait for DNS Propagation

- **Usually takes:** 15 minutes to 2 hours
- **Maximum:** Up to 48 hours
- Check status at: https://www.whatsmydns.net/

### Step 6: Enable HTTPS (Automatic)

Vercel automatically provides FREE SSL certificate from Let's Encrypt!
- No configuration needed
- Works within 24 hours of DNS setup

---

## 📝 Provider-Specific Instructions

### GoDaddy India

1. Login to GoDaddy account
2. Go to **My Products** → **Domains**
3. Click **DNS** next to your domain
4. Click **Add** to add new records
5. Add the A and CNAME records from Step 4
6. Click **Save**

### Hostinger India

1. Login to Hostinger
2. Go to **Domains** section
3. Click **Manage** next to your domain
4. Click **DNS / Nameservers**
5. Click **DNS Records**
6. Add the records from Step 4
7. Click **Save**

### Namecheap

1. Login to Namecheap
2. Click **Domain List** → Select your domain
3. Click **Manage**
4. Go to **Advanced DNS** tab
5. Add the records from Step 4
6. Click **Save Changes**

---

## ✅ Verification Steps

After DNS propagation:

1. Visit your domain: `https://yourdomain.com`
2. Should see your SwiftScale website
3. Check SSL: Should show 🔒 padlock in browser
4. Test www redirect: `https://www.yourdomain.com`

---

## 🔧 Troubleshooting

### Domain not working after 2 hours?

1. Check DNS propagation: https://www.whatsmydns.net/
2. Verify DNS records are correct (no typos)
3. Clear browser cache (Ctrl + F5)
4. Try incognito/private mode

### SSL not working?

1. Wait 24 hours (SSL takes time)
2. In Vercel, go to: Project → Settings → Domains
3. Click **Refresh** next to your domain

### www not redirecting?

1. Make sure you added the CNAME record for www
2. In Vercel Domains settings, set www as redirect

---

## 💡 Pro Tips

1. **Buy domain for multiple years** - Saves money on renewals
2. **Enable domain privacy** - Protects your personal info (usually FREE)
3. **Set up email forwarding** - Get info@yourdomain.com forwarding to Gmail
4. **Monitor expiry date** - Set calendar reminder 1 month before renewal

---

## 📊 After Domain Setup

Once your domain is live:

1. ✅ Update Google Analytics (if already set up)
2. ✅ Update Google Search Console with new domain
3. ✅ Update sitemap.xml URL
4. ✅ Update social media links
5. ✅ Update business cards/marketing materials

---

## 🎯 Complete Cost Summary

| Item | Cost (INR/year) |
|------|-----------------|
| Domain (.com) | ₹199-900 (first year) |
| Domain Renewal | ₹700-1000/year |
| Vercel Hosting | ₹0 (FREE) |
| SSL Certificate | ₹0 (FREE) |
| Bandwidth | ₹0 (Unlimited FREE) |
| **Total** | **₹199-900/year** |

---

## 📞 Need Help?

If you face any issues:
1. Check Vercel documentation: https://vercel.com/docs/concepts/projects/domains
2. Contact your domain provider's support
3. Check Vercel status: https://vercel-status.com/

---

**Ready to go live? Let me know when you've bought your domain and I'll help you set it up!** 🚀

