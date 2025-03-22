FROM node:20 AS builder
WORKDIR /app

# Set build-time environment variables
ARG STRIPE_SECRET_KEY
ENV STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-slim
WORKDIR /app

# Copy environment variables from builder stage
ENV STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/public /app/public  # If you have a public folder

EXPOSE 3000
CMD ["npm", "start"]