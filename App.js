// Importation des modules nécessaires
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Composant principal de l'application
export default function App() {
  // État pour stocker le résultat de la calculatrice
  const [result, setResult] = useState('');

  // Fonction pour gérer les actions des boutons
  const handlePress = (value) => {
    if (value === '=') {
      // Si l'utilisateur appuie sur "=", évaluer l'expression
      try {
        setResult(eval(result).toString()); // Utilisation de eval pour calculer le résultat
      } catch (error) {
        setResult('Error'); // En cas d'erreur, afficher "Error"
      }
    } else if (value === 'C') {
      // Si l'utilisateur appuie sur "C", effacer le résultat
      setResult('');
    } else {
      // Sinon, ajouter la valeur du bouton au résultat actuel
      setResult(result + value);
    }
  };

  // Tableau pour organiser les boutons de la calculatrice
  const buttons = [
    ['7', '8', '9', '/'], 
    ['4', '5', '6', '*'], 
    ['1', '2', '3', '-'], 
    ['C', '0', '=', '+'], 
  ];

  // Rendu du composant
  return (
    <View style={styles.container}>
      {/* Conteneur pour afficher le résultat */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Conteneur pour les boutons de la calculatrice */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          // Créer une ligne de boutons
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              // Créer un bouton pour chaque élément de la ligne
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handlePress(button)} // Appeler handlePress lors du clic
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

// Styles pour le composant
const styles = StyleSheet.create({
  // Conteneur principal
  container: {
    flex: 1, // Prend tout l'espace disponible
    backgroundColor: '#fff', // Fond blanc
    justifyContent: 'center', // Centrer le contenu verticalement
  },

  // Conteneur pour le résultat
  resultContainer: {
    flex: 2, // Prend 2 parts de l'espace disponible
    justifyContent: 'center', // Centrer le texte verticalement
    alignItems: 'flex-end', // Aligner le texte à droite
    padding: 20, // Espacement intérieur
    backgroundColor: '#f5f5f5', // Fond gris clair
  },

  // Texte du résultat
  resultText: {
    fontSize: 40, // Taille de police
    color: '#000', // Couleur du texte (noir)
  },

  // Conteneur pour les boutons
  buttonsContainer: {
    flex: 3, // Prend 3 parts de l'espace disponible
    backgroundColor: '#fff', // Fond blanc
  },

  // Ligne de boutons
  row: {
    flex: 1, // Chaque ligne prend une part égale de l'espace disponible
    flexDirection: 'row', // Disposition horizontale
  },

  // Style des boutons
  button: {
    flex: 1, // Chaque bouton prend une part égale de l'espace disponible
    justifyContent: 'center', // Centrer le contenu verticalement
    alignItems: 'center', // Centrer le contenu horizontalement
    borderWidth: 1, // Bordure de 1 pixel
    borderColor: '#ccc', // Couleur de la bordure (gris clair)
  },

  // Texte des boutons
  buttonText: {
    fontSize: 30, // Taille de police
    color: '#000', // Couleur du texte (noir)
  },
});