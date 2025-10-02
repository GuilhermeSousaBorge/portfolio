export interface GithubDto {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    has_pages: string;
    homepage: string | null;
    language: string | null;
    fork: boolean;
    owner: {
      login: string;
      avatar_url: string;
      html_url: string;
    };
}
