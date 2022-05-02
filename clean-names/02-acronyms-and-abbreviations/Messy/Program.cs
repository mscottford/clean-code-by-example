using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Threading.Tasks;

namespace Messy
{
    class HTTPAPIClient
    {
        static void Main()
        {
            var repos = RetRepos("oreillymedia").Result;

            foreach (var repo in repos)
            {
                Console.WriteLine(repo.Name);
            }
        }

        private static async Task<List<Repo>> RetRepos(
            string org)
        {
            SetHeads();

            var tsk = httpapiclient.GetStreamAsync(
                $"https://api.github.com/orgs/{org}/repos"
            );

            var lizer = new DataContractJsonSerializer(typeof(List<Repo>));
            var repos = lizer.ReadObject(await tsk) as List<Repo>;
            return repos;
        }

        private static void SetHeads()
        {
            httpapiclient.DefaultRequestHeaders.Accept.Clear();
            httpapiclient.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue(
                    "application/vnd.github.v3+json"
                )
            );
            httpapiclient.DefaultRequestHeaders.Add(
                "User-Agent",
                "Messy HTTPAPICli"
            );
        }

        private static readonly HttpClient httpapiclient = new HttpClient();
    }

    [DataContract(Name = "repo")]
    public class Repo
    {
        [DataMember(Name = "name")]
        public string Name;
    }
}
