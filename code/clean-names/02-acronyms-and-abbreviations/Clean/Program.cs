using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Threading.Tasks;

namespace Clean
{
    class HttpApiClient
    {
        static void Main()
        {
            var repositories = RetrieveRepositories("oreillymedia").Result;

            foreach (var repository in repositories)
            {
                Console.WriteLine(repository.Name);
            }
        }

        private static async Task<List<Repository>> RetrieveRepositories(
            string githubOrganization)
        {
            SetHeaders();

            var task = httpApiClient.GetStreamAsync(
                $"https://api.github.com/orgs/{githubOrganization}/repos"
            );

            var serializer = new DataContractJsonSerializer(typeof(List<Repository>));
            var repositories = serializer.ReadObject(await task) as List<Repository>;
            return repositories;
        }

        private static void SetHeaders()
        {
            httpApiClient.DefaultRequestHeaders.Accept.Clear();
            httpApiClient.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue(
                    "application/vnd.github.v3+json"
                )
            );
            httpApiClient.DefaultRequestHeaders.Add(
                "User-Agent",
                "Clean HttpApiClient"
            );
        }

        private static readonly HttpClient httpApiClient = new HttpClient();
    }

    [DataContract(Name = "repo")]
    public class Repository
    {
        [DataMember(Name = "name")]
        public string Name;
    }
}
