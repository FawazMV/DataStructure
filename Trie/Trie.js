class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }

            currentNode = currentNode.children[char];
        }

        currentNode.isEndOfWord = true;
    }

    search(word) {
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!currentNode.children[char]) {
                return false;
            }

            currentNode = currentNode.children[char];
        }

        return currentNode.isEndOfWord;
    }

    startsWith(prefix) {
        let currentNode = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];

            if (!currentNode.children[char]) {
                return false;
            }

            currentNode = currentNode.children[char];
        }

        return true;
    }
}

// Example usage:
const trie = new Trie();

trie.insert('apple');
trie.insert('application');
trie.insert('apply');

console.log(trie.search('apple')); // Output: true
console.log(trie.search('app')); // Output: false

console.log(trie.startsWith('app')); // Output: true
console.log(trie.startsWith('apt')); // Output: false

// Insertion: The time complexity of inserting a word into a trie is O(m), where "m" is the length of the word.The insertion process involves traversing the trie character by character and creating new nodes as needed.Since the number of characters in a word is directly proportional to the time taken for insertion, the time complexity is linear.

//     Search: The time complexity of searching for a word in a trie is O(m), where "m" is the length of the word.During the search process, each character of the word is traversed in the trie.If at any point a character is not found or the end of the word is reached before traversing all characters, the search terminates.The time complexity is linear since it depends on the length of the word being searched.

// Prefix Search(StartsWith): The time complexity of searching for words with a given prefix in a trie is O(p), where "p" is the length of the prefix.The search process involves traversing the trie character by character until the prefix is exhausted.If at any point a character is not found, the search terminates.Since the time taken depends on the length of the prefix, the time complexity is linear.

//     Deletion: The time complexity of deleting a word from a trie is O(m), where "m" is the length of the word.Deletion involves traversing the trie to find the node representing the word and marking it as the end of the word(if necessary) or removing it.The time complexity is linear since it depends on the length of the word being deleted.