## My Redux Notes

#### Error: ENOSPC: System limit for number of file watchers reached, watch.

` echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p `

[Read more about](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details)

[src link](https://github.com/gatsbyjs/gatsby/issues/11406)

***