# Import libraries
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris

# Load dataset
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['species'] = iris.target_names[iris.target]

# Explore structure
print("Dataset Shape:", df.shape)
print("Columns:", df.columns.tolist())
print("Data Types:\n", df.dtypes)

# Check missing values
print("Missing Values:\n", df.isnull().sum())

# Handle missing (Iris has none, but code for generality)
df.fillna(method='ffill', inplace=True)

# Visualize distributions
plt.figure(figsize=(12, 8))
for i, feature in enumerate(iris.feature_names):
    plt.subplot(2, 2, i+1)
    sns.histplot(data=df, x=feature, hue='species', kde=True)
    plt.title(f'Distribution of {feature}')
plt.tight_layout()
plt.savefig('images/distributions.png')
plt.close()

# Pairplot
sns.pairplot(df, hue='species')
plt.savefig('images/pairplot.png')
plt.close()

print("Data exploration completed. Visualizations saved as PNGs.")