import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button} from '@chakra-ui/react'
import { useRouter } from 'next/router'    
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'

import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
            query[item.name] = item.value
            }
        })

        router.push({ pathname: path, query })
    }
    return ( 
        <Flex>
            {filters.map((filter) => (
                <Box>
                    <Select                        
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2"
                    onchange={(e) => searchProperties ({ [filter.queryName]: e.target.value })}
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                             {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>                    
            ))}
        </Flex>
    )
}

export default SearchFilters;
