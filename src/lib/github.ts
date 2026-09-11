export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
}

const USERNAME = 'Emretetik0';
const TARGET_REPOS = ['ExamLens', 'finflow', 'autofix', 'portfolio'];

export async function fetchProjects(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`);
    if (!response.ok) throw new Error('Failed to fetch repositories');
    
    const repos: GitHubRepo[] = await response.json();
    
    // Filter for our target projects
    // We can also filter by topics like 'portfolio-item' if the user adds them
    return repos.filter(repo => 
      TARGET_REPOS.includes(repo.name)
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
