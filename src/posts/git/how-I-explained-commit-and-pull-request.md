---
title: 'How I Explained Commit and Pull Request'
description: "I had to explain the basics of Git to someone that had used it only a couple of times, and here's how I did it"
date: '13 January 2020'
author: 'Marcel Cruz'
---

It was somewhere in November last year, I had a friend with little Git experience sitting beside me, and as the day was passing by he was accumulating files with changes and not being able to make a decision of when and how to commit them, and later on, to PR.

It felt hard to give him any advice not knowing what he was working on (we were working on different projects), so I used a non-IT example. Now I want to share it with you.

_Note: if you want to understand the command-wise "how", well, that's not quite the post for you. But if you want to understand what should belong to the same commit, what shouldn't or when to send a PR, read on._

I fired: imagine you're revising a book, finding and correcting punctuation, misspellings and changing words wherever needed. We'll work from here.

##### Correcting punctuation

We're going from the first to the last line of chapter one, finding missing or misplaced commas, periods and whatnot. We make a few fixes. Are we done here? Yes! So let's commit it.

Commit message: `fix punctuation on chapter one`

##### Correcting misspellings

We go back to the beginning of chapter one, but now we have a new task: fixing all words that are misspelled. We find and fix a few here and there and again we reach the end of this chapter. Guess what? Let's commit again!

Commit message: `fix misspellings on chapter one`

##### Improving understanding

While working on punctuation and misspellings we noticed that some sentences were too complex to be understood, so what if we **refactor** it with a few simpler synonyms? We change a few words, improve readability, and voilà, all makes sense now. Yes, we commit once more.

Commit message: `refactor chapter one with simpler synonyms`

I guess we're done with this chapter.

##### It's time for a pull request

PR title: `Fix punctuation and misspellings and improve readability of chapter one`

PR description: `This PR contains fixes to missing and misused punctuation, fixes for misspellings using en-GB and improvements of understanding and readability by using simpler synonyms that replace uncommon words on chapter one.`

Let's review what we just did:

-   The commits were **atomic**. What does that mean? It means they should have only related changes within itself. Go back and read our commit messages again. Do you see it? Each commit deals with one and only one type of fix and/or change. If later on the author of the book says that the book should indeed be hard to be understood, fine, we just need to revert back the third commit, the one that adds synonyms to facilitate the understanding. Easy peasy.

-   The commit messages were straight forward, short and described what happened in the code that's being sent. Messages like `fix bug` or `add feature` are not descriptive and won't allow you to easily remember what was done at a later point in time. Also, good practice says that the first word should indicate the type of changes the commit contains: `fix`, `refactor`, `style`, `docs`, etc. You can find more about it <a href="https://seesparkbox.com/foundry/semantic_commit_messages" target="_blank">here</a>.

-   We grouped all commits that belong to the current changes on chapter one in the same PR. Nothing else. This makes the life of the person that is going to review it easier because the scope of the changes is easily identified, plus it does not interfere in chapter two, that in turn might already be under revision by the colleague next to you.

-   The PR has a succinct title, like our commits, but its description goes deeper into how the changes were applied.

It's likely that your case isn't revising chapter one of some book, but instead adding a new feature to your app, a new section on your website, or anything that belongs to the same "box", but the logic should remain the same.

I'd be happy to know if this analogy makes sense to you, or how else you would tackle such situation.

Happy coding!
